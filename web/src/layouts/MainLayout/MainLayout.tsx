import Header from 'src/components/Header'
import Main from 'src/components/Main'
import Footer from 'src/components/Footer'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col items-center w-screen">
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  )
}

export default MainLayout
