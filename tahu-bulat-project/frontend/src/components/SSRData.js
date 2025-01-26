import { supabase } from '../supabaseClient';

export async function getServerSideProps() {
  const { data, error } = await supabase.from('your_table_name').select('*');

  if (error) {
    return {
      props: { error: error.message },
    };
  }

  return {
    props: { data },
  };
}

const SSRData = ({ data, error }) => {
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-5">SSR Data</h1>
      <pre className="bg-gray-100 p-5 rounded-lg shadow-lg">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
};

export default SSRData;