import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="carousel h-2/4">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://img.freepik.com/free-photo/doctor-crossing-arms-while-holding-stethoscope-white-coat_176474-8491.jpg?w=1060&t=st=1667837138~exp=1667837738~hmac=3e0ce0cb70712a59a27fa8ac9cbc503ab49a5ef1e842a91d70942a5d9850e0ae" alt='' className="w-full object-cover" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17818.jpg?size=626&ext=jpg&ga=GA1.2.1952825020.1667836919&semt=sph" alt='' className="w-full object-cover" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://img.freepik.com/free-photo/doctor-crossing-arms-while-holding-stethoscope-white-coat_176474-8491.jpg?w=1060&t=st=1667837138~exp=1667837738~hmac=3e0ce0cb70712a59a27fa8ac9cbc503ab49a5ef1e842a91d70942a5d9850e0ae" alt='' className="w-full object-cover" />
                </div>

            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
            </div>

        </div>
    );
};

export default Banner;