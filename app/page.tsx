import React from "react";
import { ParticlesContainer } from "@/components/particles-container";
import { MousePointer } from "@/components/mouse-pointer";
import { Home } from "@/components/home";
import { Navbar } from "@/components/navbar";

export default function Page() {
    return (
        <>
            <main
                className="relative m-0 flex h-screen w-screen overflow-hidden p-0 before:absolute before:-left-52
                    before:-top-52 before:z-10 before:h-[500px] before:w-[500px] before:rounded-full before:bg-white
                    before:opacity-20 before:blur-[200px] before:content-[''] after:absolute after:-bottom-52
                    after:-right-52 after:z-10 after:h-[500px] after:w-[500px] after:rounded-full after:bg-primary
                    after:opacity-20 after:blur-[200px] after:content-['']"
            >
                <ParticlesContainer />
                <MousePointer />

                <section className="z-20 h-full w-full overflow-auto py-20">
                    <div className="container">
                        <Navbar />
                        <Home />
                    </div>
                </section>
            </main>
        </>
    );
}
