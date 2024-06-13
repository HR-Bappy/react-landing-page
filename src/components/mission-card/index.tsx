import './mission-card.scss'




const MissionCard = ({ data }: any) => {

    return (

        <section id="advertisers" className="mission-section pt-5 pb-5">
            <div>
                <h1 className="section-title">OUR MISSION</h1>
            </div>
            <div className="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center">
                {
                    data?.map((item: any, index: number) => {
                        return (
                            <div className="col" key={index}>
                                <div className="service-card">
                                    <div className="bg-wrapper">
                                        <img src={item.img} />
                                    </div>
                                    <div className="icon-wrapper">
                                        {item.icon}
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </section>
    )
}

export default MissionCard