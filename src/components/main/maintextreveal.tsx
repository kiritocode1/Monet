import TextReveal from "@/components/ui/text-reveal";

export async function TextRevealDemo() {
	return (
		<div className="z-10 flex min-h-[16rem] items-center justify-center rounded-lg  bg-white dark:bg-black">
			<TextReveal text="Introducing a New way to Design and Handle APIS ." />
		</div>
	);
}
