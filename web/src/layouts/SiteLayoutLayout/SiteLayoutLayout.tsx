type SiteLayoutLayoutProps = {
  children?: React.ReactNode
}

const SiteLayoutLayout = ({ children }: SiteLayoutLayoutProps) => {
  return <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">{children}</div>
}

export default SiteLayoutLayout
