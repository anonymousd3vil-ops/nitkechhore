import { TypeAnimation } from "react-type-animation";
import MainLayout from "../../layout/mainLayout.jsx";

function CodingHomePage() {
  return (
    <MainLayout>
      <div className="h-screen">
        <section className="relative overflow-hidden">
          {/* Background decoration */}
			<div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

			<div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />

			<div className="mx-auto max-w-7xl px-5 pb-20 pt-16 lg:px-8 lg:pt-24">
				<div className="grid items-center gap-14 lg:grid-cols-2">
				{/* Hero text */}

				<div>
					<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
						<span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
						NIT Ke Chhore Coding Hub
					</div>

					<div className="flex flex-col items-start text-center">
						<p className="text-sm md:text-lg font-medium tracking-[0.25em] uppercase text-base-content/50 mb-3">
							Your journey starts here
						</p>

						<div className="text-2xl md:text-4xl font-black tracking-normal font-primary">
							<span className="text-base-content">With NITKeChhore </span>
							<TypeAnimation
								sequence={[
									"LEARN.", 1200,
									"CODE.", 1200,
									"COMPETE.", 1200,
									"BUILD.", 1200,
									"CREATE.", 1200,
								]
							}
							wrapper="span"
							speed={45}
							repeat={Infinity}
							className="text-secondary inline-block font-primary"
							/>
						</div>

						<div className="mt-4 h-0.5 w-20 bg-primary rounded-full" />
					</div>

					<p className="mt-7 max-w-xl text-lg leading-8 text-base-content/60 font-primary">
						A coding space made for students who want to master
						programming, DSA and problem solving — one problem at a time.
					</p>

					<div className="mt-9 flex flex-wrap gap-3 font-primary">
						<button className="btn btn-primary px-7">
							Start Coding
							<span>→</span>
						</button>

						<button className="btn btn-outline px-7">
							Explore Roadmap
						</button>
					</div>

					{/* Small trust indicators */}

					<div className="mt-10 flex flex-wrap gap-6 text-sm text-base-content/50 font-primary">
						<div className="flex items-center gap-2">
							<span className="text-success">✓</span>
							Beginner Friendly
						</div>

						<div className="flex items-center gap-2">
							<span className="text-success">✓</span>
							DSA Focused
						</div>

						<div className="flex items-center gap-2">
							<span className="text-success">✓</span>
							Placement Ready
						</div>
					</div>
				</div>

				{/* Code editor */}

				<div className="relative">
					<div className="absolute inset-0 rounded-3xl bg-primary/10 blur-3xl" />
					<div className="mockup-code relative overflow-hidden border border-base-300 bg-base-300 shadow-2xl">
						<pre data-prefix="$">
							<code className="text-primary">nitkechhore codeing hub</code>
						</pre>

						<pre data-prefix=">" className="text-success">
							<code>Loading your coding journey...</code>
						</pre>

						<pre data-prefix=">" className="text-warning">
							<code>Preparing DSA roadmap...</code>
						</pre>

						<pre data-prefix=">" className="text-primary">
							<code>Ready to code_</code>
						</pre>
					</div>
				</div>
				</div>
			</div>
        </section>
      </div>
    </MainLayout>
  );
}

export default CodingHomePage;
