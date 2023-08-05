const PostTreatment = () => {
    return (
        <div>
            <h1 id = "post-treatment" className="text-center">POST TREATMENT</h1>
            <br />
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                    </div>
                    <div className="col">
                        <div id="carouselExampleCaptions" className="carousel slide">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img width="300px" height="270px" src="https://roomchang.com/m/wp-content/uploads/sites/8/2017/09/Before-after-dental-braces_orthodontic-treatment-1024x620.jpg" className="d-block w-100" alt="..." />
                                    <h5>Before and After Orthodontic</h5>
                                </div>
                                <div className="carousel-item">
                                    <img width="300px" height="270px" src="https://www.researchgate.net/publication/259753585/figure/fig3/AS:459430920757250@1486548275506/Pre-and-post-orthodontic-treatment-stage-A-The-preorthodontic-intraoral-frontal-view.png" className="d-block w-100" alt="..." />

                                    <h5>Before and After Orthodontic</h5>

                                </div>
                                <div className="carousel-item">
                                    <img width="300px" height="270px" src="https://slideplayer.com/slide/7510760/24/images/3/RETENTION+PRE-TREATMENT+POST-TREATMENT+RELAPSE+UNPREDICTABLE.jpg" className="d-block w-100" alt="..." />

                                    <h5>Before and After Orthodontic</h5>

                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="col">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostTreatment;