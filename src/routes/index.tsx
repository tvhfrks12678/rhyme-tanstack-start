import { Button } from '@/components/ui/button'
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from '@/components/ui/label'
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field"
import { createFileRoute } from '@tanstack/react-router'
import { Tilt } from 'components/motion-primitives/tilt'
// import {
//   Zap,
//   Server,
//   Route as RouteIcon,
//   Shield,
//   Waves,
//   Sparkles,
// } from 'lucide-react'

export const Route = createFileRoute('/')({ component: App })


function App() {
  return (
    <div>
      <TiltCard1 />
      <Button>Click me</Button>
      <Checkbox />

      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>





      <FieldGroup className="max-w-sm">
        {/* <Field orientation="horizontal">
          <Checkbox id="terms-checkbox" name="terms-checkbox" />
          <Label htmlFor="terms-checkbox">Accept terms and conditions</Label>
        </Field>
        <Field orientation="horizontal">
          <Checkbox
            id="terms-checkbox-2"
            name="terms-checkbox-2"
            defaultChecked
          />
          <FieldContent>
            <FieldLabel htmlFor="terms-checkbox-2">
              Accept terms and conditions
            </FieldLabel>
            <FieldDescription>
              By clicking this checkbox, you agree to the terms.
            </FieldDescription>
          </FieldContent>
        </Field>
        <Field orientation="horizontal" data-disabled>
          <Checkbox id="toggle-checkbox" name="toggle-checkbox" disabled />
          <FieldLabel htmlFor="toggle-checkbox">Enable notifications</FieldLabel>
        </Field> */}
        <FieldLabel>
          <Field orientation="horizontal">
            <Checkbox id="toggle-checkbox-2" name="toggle-checkbox-2" />
            <FieldContent>
              <FieldTitle>Enable notifications</FieldTitle>
              <FieldDescription>
                You can enable or disable notifications at any time.
              </FieldDescription>
            </FieldContent>
          </Field>
        </FieldLabel>
      </FieldGroup>




    </div>
  )
}




export function TiltCard1() {
  return (
    <Tilt rotationFactor={8} isRevese>
      <div
        style={{
          borderRadius: '12px',
        }}
        className='flex max-w-[270px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900'
      >
        <img
          src='https://images.beta.cosmos.so/f7fcb95d-981b-4cb3-897f-e35f6c20e830?format=jpeg'
          alt='Ghost in the shell - Kôkaku kidôtai'
          className='h-48 w-full object-cover'
        />
        <div className='p-2'>
          <h1 className='font-mono leading-snug text-zinc-950 dark:text-zinc-50'>
            Ghost in the Shell
          </h1>
          <p className='text-zinc-700 dark:text-zinc-400'>Kôkaku kidôtai</p>
        </div>
        <InteractiveHoverButton>Interactive Hover Button</InteractiveHoverButton>
      </div>
    </Tilt>
  );
}




// function App() {
//   const features = [
//     {
//       icon: <Zap className="w-12 h-12 text-cyan-400" />,
//       title: 'Powerful Server Functions',
//       description:
//         'Write server-side code that seamlessly integrates with your client components. Type-safe, secure, and simple.',
//     },
//     {
//       icon: <Server className="w-12 h-12 text-cyan-400" />,
//       title: 'Flexible Server Side Rendering',
//       description:
//         'Full-document SSR, streaming, and progressive enhancement out of the box. Control exactly what renders where.',
//     },
//     {
//       icon: <RouteIcon className="w-12 h-12 text-cyan-400" />,
//       title: 'API Routes',
//       description:
//         'Build type-safe API endpoints alongside your application. No separate backend needed.',
//     },
//     {
//       icon: <Shield className="w-12 h-12 text-cyan-400" />,
//       title: 'Strongly Typed Everything',
//       description:
//         'End-to-end type safety from server to client. Catch errors before they reach production.',
//     },
//     {
//       icon: <Waves className="w-12 h-12 text-cyan-400" />,
//       title: 'Full Streaming Support',
//       description:
//         'Stream data from server to client progressively. Perfect for AI applications and real-time updates.',
//     },
//     {
//       icon: <Sparkles className="w-12 h-12 text-cyan-400" />,
//       title: 'Next Generation Ready',
//       description:
//         'Built from the ground up for modern web applications. Deploy anywhere JavaScript runs.',
//     },
//   ]

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
//       <section className="relative py-20 px-6 text-center overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
//         <div className="relative max-w-5xl mx-auto">
//           <div className="flex items-center justify-center gap-6 mb-6">
//             <img
//               src="/tanstack-circle-logo.png"
//               alt="TanStack Logo"
//               className="w-24 h-24 md:w-32 md:h-32"
//             />
//             <h1 className="text-6xl md:text-7xl font-black text-white [letter-spacing:-0.08em]">
//               <span className="text-gray-300">TANSTACK</span>{' '}
//               <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
//                 START
//               </span>
//             </h1>
//           </div>
//           <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
//             The framework for next generation AI applications
//           </p>
//           <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
//             Full-stack framework powered by TanStack Router for React and Solid.
//             Build modern applications with server functions, streaming, and type
//             safety.
//           </p>
//           <div className="flex flex-col items-center gap-4">
//             <a
//               href="https://tanstack.com/start"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-cyan-500/50"
//             >
//               Documentation
//             </a>
//             <p className="text-gray-400 text-sm mt-2">
//               Begin your TanStack Start journey by editing{' '}
//               <code className="px-2 py-1 bg-slate-700 rounded text-cyan-400">
//                 /src/routes/index.tsx
//               </code>
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="py-16 px-6 max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
//             >
//               <div className="mb-4">{feature.icon}</div>
//               <h3 className="text-xl font-semibold text-white mb-3">
//                 {feature.title}
//               </h3>
//               <p className="text-gray-400 leading-relaxed">
//                 {feature.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   )
// }
