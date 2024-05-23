import { FC } from 'react'

interface pageProps {

}







const page: FC<pageProps> = async({ }) => {



function getabsoluteUrl (url: string) {
  return  "http://monet-lac.vercel.app" + url;
}


async function getperfTime(url:string) {
    			const startTime = performance.now();
			const res = await fetch(url); // performance measure
			const endTime = performance.now();
            const data = await res.json();


            return {data, endTime, startTime}

}



      const url = getabsoluteUrl(true ? "/api/hono" : "/api/old");



	const { data:hono_data, endTime:hono_endTime, startTime:hono_startTime}
    =await getperfTime(getabsoluteUrl("/api/hono"));

    const {data : old_data , endTime : old_endTime , startTime : old_startTime}=await getperfTime(getabsoluteUrl("/api/old"));





  return (
		<div>
			<h1> Took this many milli seconds : {hono_endTime - hono_startTime}</h1>
			<h1>{JSON.stringify(hono_data)}</h1>


            			<h1> Took this many milli seconds : {old_endTime - old_startTime}</h1>
			<h1>{JSON.stringify(old_data)}</h1>
		</div>
	);
}

export default page