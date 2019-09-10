interface ListingResponse {
  list: string[];
}

export function registerListReports(server): void {
  server.route({
    path: '/api/reporting-schedulization/list-reports',
    method: 'GET',
    async handler(): Promise<ListingResponse> {
      return {
        list: [ 'check' ]
      };
    },
  });
}