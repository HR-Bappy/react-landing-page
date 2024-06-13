import './services-card.scss'
import Counter from '../counter';




const ServicesCard = ({ data }: any) => {


    return (
        <div className="services-card">
            <div className="row">
                {
                    data?.map((item:any,index:number) => {
                        return(
                            <div className="col-md-3 single-services-card" key={index} > 
                                <div className="bg-overlay">
                                    <img src={item.bgImg} alt="" />
                                </div>
                                <img className='logo' src={item.logo} alt="logo"/>
                                <h5> <Counter end={item.count} />{item.title}</h5>
                               <p>{item.description}</p>
                            </div>
                        )
                    })
                }
                    </div>
        </div>
    )
}

export default ServicesCard