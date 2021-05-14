import { useRouter } from 'next/router';

const ClientProjectsPage = () => {
  const router = useRouter();

  const loadProjecHandler = () => {
    router.push('/clients/yiro/yirosBilliards')
  }

  return(
    <div>
      <h1>The ClientProjectsPage</h1>
      <button onClick={loadProjecHandler} >Load Project A</button>
    </div>
  );
}

export default ClientProjectsPage;

