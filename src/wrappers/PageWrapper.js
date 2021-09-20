const PageWrapper = ({padding , children})=>{
    return <div className="page-wrapper" style={{padding}}>
        {children}
    </div>
}

export default PageWrapper;