import {useCallback} from 'react';

import {useAuth} from '../context/AuthProvider';
import {
  Base_API_DEV,
  EXCLUDE_AUTH_TOKEN_ORG_HEADER_ENDPOINTS,
} from '../utils/Constants';

export default function useCustomFetch() {
  const {user: userData, organizationId} = useAuth();
  const token = userData?.token;
  const run = useCallback(
    async (
      endpoint,
      {method = 'GET', data, headers: customHeaders, ...customConfig} = {},
    ) => {
      try {
        const config = {
          method: method,
          ...(data && {body: JSON.stringify(data)}),
          headers: {
            ...(token &&
            !EXCLUDE_AUTH_TOKEN_ORG_HEADER_ENDPOINTS.includes(endpoint)
              ? {Authorization: `Bearer ${token}`}
              : {}),
            'Content-Type': 'application/json',
            ...customHeaders,
            ...(organizationId &&
              !EXCLUDE_AUTH_TOKEN_ORG_HEADER_ENDPOINTS.includes(endpoint) && {
                organizationId: organizationId,
              }),
          },
          ...customConfig,
        };
        debugger;
        const response = await fetch(`${Base_API_DEV}/${endpoint}`, config);
        if (response.status === 401) {
          if (!token) {
            return await response.json();
          }
        }
        if (response.status === 400) {
          const parsedResponse = await response.json();
          return parsedResponse?.title
            ? {
                status: false,
                error: {message: parsedResponse?.title, ...parsedResponse},
              }
            : parsedResponse;
        }
        if (customConfig?.requestType === 'blob') {
          const result = await response.blob();
          return result;
        }
        const responseData = await response.json();
        return responseData;
      } catch (error) {
        console.log(`Error while fetching ${endpoint} : ${error.message}`);
        return {status: false, error: error.message, ...error};
      }
    },
    [organizationId, token],
  );

  return {
    apihelper: run,
  };
}
