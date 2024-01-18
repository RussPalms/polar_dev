'use client'

import { StackWeekLogo } from '@/components/StackWeek/StackWeekLogo'
import { HTMLMotionProps, Variants, motion } from 'framer-motion'
import NextLink, { LinkProps } from 'next/link'
import { PropsWithChildren, useEffect, useRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { Gradient } from '../../../components/LandingPage/MeshGradient'

const Link = ({
  children,
  className,
  ...props
}: PropsWithChildren<LinkProps & { className?: string }>) => {
  const variants: Variants = {
    initial: {
      y: '100%',
    },
    animate: {
      y: '0%',
      transition: {
        duration: 0.4,
        ease: [0.65, 0, 0.35, 1],
      },
    },
  }

  const variantsOutgoing: Variants = {
    initial: {
      y: '0%',
    },
    animate: {
      y: '-100%',
      transition: {
        duration: 0.4,
        ease: [0.65, 0, 0.35, 1],
      },
    },
  }

  return (
    <motion.div
      className="overflow-hidden"
      initial="initial"
      whileHover="animate"
    >
      <NextLink {...props} className="relative">
        <motion.div
          className={twMerge('absolute', className)}
          variants={variants}
        >
          {children}
        </motion.div>
        <motion.div className={className} variants={variantsOutgoing}>
          {children}
        </motion.div>
      </NextLink>
    </motion.div>
  )
}

const ClientPage = () => {
  const ref = useRef(null)

  useEffect(() => {
    const gradient = new Gradient()
    /** @ts-ignore */
    gradient.initGradient('#gradient-canvas')
  }, [])

  return (
    <>
      <main className="flex flex-col bg-black text-white">
        <motion.section
          ref={ref}
          className="relative flex h-screen w-full flex-col justify-between p-16"
        >
          <canvas
            id="gradient-canvas"
            className="absolute inset-0 z-0 h-full w-full"
            data-transition-in
          />
          <motion.div
            className="relative mx-auto flex max-w-screen-2xl flex-grow flex-col items-center justify-center gap-y-16 lg:gap-y-32"
            variants={{
              initial: { opacity: 1 },
              animate: { opacity: 1, transition: { staggerChildren: 0.5 } },
            }}
            initial="initial"
            animate="animate"
          >
            <TextReveal>
              <StackWeekLogo radius={200} animate />
            </TextReveal>
            <h1 className="text-center text-5xl !font-medium leading-snug tracking-tight lg:text-[calc(100vw_/_20)]">
              <TextReveal className="[text-wrap:balance]">
                Artificial Intelligence & Python
              </TextReveal>
            </h1>
            <TextReveal>
              <p className="max-w-2xl text-center text-xl font-light !leading-normal [text-wrap:pretty] md:text-3xl">
                Celebrating a new generation of APIs for LLM models & modern web
                applications
              </p>
            </TextReveal>
          </motion.div>
        </motion.section>

        <motion.section
          id="support"
          className="flex w-full flex-row justify-between gap-y-12 bg-gradient-to-b from-blue-50 to-blue-400 p-32 text-gray-950"
        >
          <div className="relative mx-auto flex max-w-screen-xl flex-col justify-between gap-24">
            <div className="flex flex-col items-center gap-8 text-center">
              <h3 className="text-3xl font-semibold text-blue-500">
                Follow with Polar
              </h3>
              <h1 className="text-6xl !font-bold leading-snug text-black">
                Support your favorite creators
              </h1>
              <p className="w-2/3 text-3xl leading-snug text-gray-500">
                Distribute exclusive content & transform your coding passion
                into a monthly income stream
              </p>
            </div>
            <motion.img
              className="w-full rounded-[2.5rem] drop-shadow-2xl"
              src="/tiers.png"
              initial="hidden"
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 2, ease: 'linear' },
                },
                hidden: {
                  opacity: 0,
                  y: 50,
                },
              }}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.06 }}
            />
            <motion.div
              className="grid w-full grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.08 }}
            ></motion.div>
          </div>
        </motion.section>

        <motion.footer className="flex w-full flex-col items-center bg-white p-32 text-gray-950">
          <div
            className={twMerge(
              'flex w-full flex-col gap-x-16 gap-y-24 md:max-w-screen-xl md:flex-row md:justify-between md:gap-y-12',
            )}
          >
            <div className="flex flex-col gap-y-8">
              <h3 className="text-xl font-medium">Creator</h3>
              <div className="flex flex-col gap-y-1">
                <FooterLink href="/new">Subscriptions</FooterLink>
                <FooterLink href="/new">Benefits</FooterLink>
                <FooterLink href="/new">Posts</FooterLink>
                <FooterLink href="/new">Backlog Funding</FooterLink>
                <FooterLink href="https://docs.polar.sh">
                  Documentation
                </FooterLink>
              </div>
            </div>
            <div className="flex flex-col gap-y-8">
              <h3 className="text-xl font-medium">Supporter</h3>
              <div className="flex flex-col gap-y-1">
                <FooterLink href="/new">Subscriptions</FooterLink>
                <FooterLink href="/new">Benefits</FooterLink>
                <FooterLink href="/new">Posts</FooterLink>
                <FooterLink href="/new">Backlog Funding</FooterLink>
              </div>
            </div>
            <div className="flex flex-col gap-y-8">
              <h3 className="text-xl font-medium">Company</h3>
              <div className="flex flex-col gap-y-1">
                <FooterLink href="/careers">Careers</FooterLink>
                <FooterLink href="https://blog.polar.sh">Blog</FooterLink>
                <FooterLink href="https://polarsource.github.io/legal/terms.pdf">
                  Terms of Service
                </FooterLink>
                <FooterLink href="https://polarsource.github.io/legal/privacy-policy.pdf">
                  Privacy Policy
                </FooterLink>
              </div>
            </div>
            <div className="flex flex-col gap-y-8">
              <h3 className="text-xl font-medium">Community</h3>
              <div className="flex flex-col gap-y-1">
                <FooterLink href="https://discord.gg/STfRufb32V">
                  Join our Discord
                </FooterLink>
                <FooterLink href="https://github.com/polarsource">
                  GitHub
                </FooterLink>
                <FooterLink href="https://x.com/polar_sh">
                  X / Twitter
                </FooterLink>
              </div>
            </div>
            <div className="flex flex-col gap-y-8">
              <h3 className="text-xl font-medium">Support</h3>
              <div className="flex flex-col gap-y-1">
                <FooterLink href="/faq">FAQ</FooterLink>
                <FooterLink href="mailto:support@polar.sh">Contact</FooterLink>
              </div>
            </div>
          </div>
        </motion.footer>
      </main>
    </>
  )
}

export default ClientPage

const FooterLink = (props: PropsWithChildren<LinkProps>) => {
  return (
    <Link
      className="flex flex-row items-center gap-x-1 text-blue-500 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300"
      {...props}
    >
      {props.children}
    </Link>
  )
}

const variants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
}

const TextReveal = ({ children, ...props }: HTMLMotionProps<'div'>) => {
  return (
    <motion.div {...props} className="relative h-fit overflow-hidden">
      <motion.div variants={variants}>{children}</motion.div>
    </motion.div>
  )
}
