
export async function generateStaticParams() {
   return [
      { slug: "test" }
   ]
}

const Page: React.FC<{ params: { slug: string } }> = ({ params }) => {
   return <div>

      {`POST: ${params}`}
   </div>
}

export default Page