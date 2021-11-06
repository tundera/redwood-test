type SiteLayoutLayoutProps = {
  children?: React.ReactNode
}

const SiteLayoutLayout = ({ children }: SiteLayoutLayoutProps) => {
  return <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">{children}</div>
}

export default SiteLayoutLayout
