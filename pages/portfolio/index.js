import { useRouter } from 'next/router';

const PortfolioPage = () => {
  const router = useRouter();

  const projectId = router.query

  return(
    <div>
      <h1>The Portfolio Page`${projectId}`</h1>
    </div>
  );
}

export default PortfolioPage;
