function Card () {

    return (
        <section className=" bg-zinc-800 min-h-[60vh] flex flex-wrap gap-[5vw] justify-around items-center p-[5vw] " >

            <div className=" bg-black flex-1 h-[50vh] min-w-[260px] max-w-[350px] rounded-lg shadow-xl shadow-black/50 hover:shadow-2xl hover:shadow-black/80 transition-all duration-300 flex flex-col items-center justify-around p-[2%] " >
                <div className=" w-[27%] h-[20%] bg-blue-500 rounded-full "></div>
                <h4 className=" text-white text-4xl font-bold " >Lorem</h4>
                <p className=" text-white text-[1.5vh] " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam possimus veniam fugiat assumenda, doloribus, voluptate cum molestiae aperiam sapiente totam ducimus modi suscipit adipisci sint, architecto excepturi soluta harum sit?</p>
            </div>

            <div className=" bg-black flex-1 h-[50vh] min-w-[260px] max-w-[350px] rounded-lg shadow-xl shadow-black/50 hover:shadow-2xl hover:shadow-black/80 transition-all duration-300 flex flex-col items-center justify-around p-[2%] " >
                <div className=" w-[27%] h-[20%] bg-blue-500 rounded-full "></div>
                <h4 className=" text-white text-4xl font-bold " >Lorem</h4>
                <p className=" text-white text-[1.5vh] " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam possimus veniam fugiat assumenda, doloribus, voluptate cum molestiae aperiam sapiente totam ducimus modi suscipit adipisci sint, architecto excepturi soluta harum sit?</p>
            </div>

            <div className=" bg-black flex-1 h-[50vh] min-w-[260px] max-w-[350px] rounded-lg shadow-xl shadow-black/50 hover:shadow-2xl hover:shadow-black/80 transition-all duration-300 flex flex-col items-center justify-around p-[2%] " >
                <div className=" w-[27%] h-[20%] bg-blue-500 rounded-full "></div>
                <h4 className=" text-white text-4xl font-bold " >Lorem</h4>
                <p className=" text-white text-[1.5vh] " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam possimus veniam fugiat assumenda, doloribus, voluptate cum molestiae aperiam sapiente totam ducimus modi suscipit adipisci sint, architecto excepturi soluta harum sit?</p>
            </div>

        </section>
    )

}

export default Card