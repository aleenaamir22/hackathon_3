
import { useRouter } from 'next/router';

const FAQPage = () => {
  const router = useRouter();
  const { FAQpage } = router.query; 

  return (
    <div>
      <h1>FAQ - {FAQpage}</h1>
      
    </div>
  );
};

export default FAQPage;
