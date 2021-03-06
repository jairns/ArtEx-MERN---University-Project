import React from 'react';

const Section = () => {
    return (
        <div>
            <section className="d-flex align-items-center text-center" style={{
                height: "100vh"
            }}>
                <div className="col-10 offset-1 col-lg-8 offset-lg-2 div-wrapper d-block justify-content-center align-items-center">
                    <h3>ABOUT</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                </div>
            </section>
        </div>
    )
}

export default Section;
