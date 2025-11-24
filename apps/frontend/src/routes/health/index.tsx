import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import { healthQueryOptions } from '@/services/health/health';

export const Route = createFileRoute('/health/')({
  component: RouteComponent,
  pendingComponent: () => <div>Loading health status...</div>,
  loader: async ({ context }) => {
    await context.queryClient.prefetchQuery(healthQueryOptions());
  },
});

function RouteComponent() {
  const healthQuery = useSuspenseQuery(healthQueryOptions());

  return (
    <>
      <div>timestamp: {healthQuery.data.timestamp}</div>
      <button type="button" className="p-4 bg-gray-300 rounded" onClick={() => healthQuery.refetch()}>
        再取得
      </button>
    </>
  );
}
