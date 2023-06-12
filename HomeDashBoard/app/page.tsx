"use client"
import * as React from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[968px] flex-col items-start gap-2">
        <h1 className="text-xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Création<br className="hidden sm:inline" />
          Développement <br />
          web par Lerian Agency 
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground mt-10">
           Je  suis Andy Ramaroson, un développeur web FullStack JS basée sur Bordeaux (N. Aquitaine, 33) et je réalise tous types de logiciels et 
           d applications sur mesure en me basant sur des technologies web modernes. Je suis spécialisés sur le langage  JavaScript, et plus précisément
           le framework React & NextJs .
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Contacter-Moi
        </Link>
      </div>
      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Mon Expertise
      </h2>
      <p className="max-w-[700px] text-lg text-muted-foreground">
          Je  réalise depuis plus de 2 ans des outils sur-mesureà destination de toutes tailles.
          Je transforme chasue besoins de mes clients en solution web, en garantissant le respec
          de leur règles métiers.
      </p>

      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Ils m ont fait confiance
      </h2>
      <p className="max-w-[700px] text-lg text-muted-foreground">
        Je réalise au quotidien des projets pour des startups, PME, éditeurs de logiciels.
      </p>   
      
    </section>
  )
}
