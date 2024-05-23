import { BentoDemo } from "@/components/main/mainbentogrid";
import { OrbitingCirclesDemo } from "@/components/main/mainorbitingcircle";
import { TextRevealDemo } from "@/components/main/maintextreveal";
import ShimmerButton from "@/components/ui/magic-shimmer-button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
		<main className="flex items-center flex-col justify-center">
			<TextRevealDemo />
		  <OrbitingCirclesDemo />
		  <Link href="docs">
			<ShimmerButton className="shadow-2xl">
				<span  className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
					Learn more
				</span>
			  </ShimmerButton>
			</Link>
			<BentoDemo />
		</main>
	);
}
