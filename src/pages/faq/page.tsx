// pages/faq/[page].tsx
import { useRouter } from 'next/router';

const FAQPage = () => {
  const router = useRouter();
  const { page } = router.query; 

  return (
    <div>
      <h1>FAQ - {page}</h1>
      

    </div>
  );
};

export default FAQPage;
