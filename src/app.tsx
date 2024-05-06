import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Suspense, lazy } from "react"


// Layouts
import RootLayout from "./layouts/root-layout"

// Components
import Loading from "./components/loading"

// Pages
import Home from "./pages/home"
import { ThemeProvider } from "./components/theme-provider"
const About = lazy(() => import("./pages/about"))
const MoreContent = lazy(() => import("./pages/more-content"))
const Projects = lazy(() => import("./pages/projects"))
const ErrorPage = lazy(() => import("./pages/error-page"))


export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: (
        <Suspense fallback={<Loading />}>
          <ErrorPage />
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'about',
          element: (
            <Suspense fallback={<Loading />}>
              <About />
            </Suspense>
          )
        },
        {
          path: 'projects',
          element: (
            <Suspense fallback={<Loading />}>
              <Projects />
            </Suspense>
          )
        },
        {
          path: 'more-content',
          element: (
            <Suspense fallback={<Loading />}>
              <MoreContent />
            </Suspense>
          )
        }
      ]
    }
  ])

  return (
    <ThemeProvider defaultTheme='dark' storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
