import { useRouter } from 'next/router';

const ClientsPage = () => {
  const router = useRouter();

  const projectId = router.query

  return(
    <div>
      <h1>The Clients Page`${projectId}`</h1>
    </div>
  );
}

export default ClientsPage;
