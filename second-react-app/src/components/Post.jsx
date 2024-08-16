
function Post({title,desc}){
    // let title = "React Course"
    // console.log(style)
    function randomInt(){
        return Math.round(Math.random()*100)
    }
    
    return (
    <>
    <div style={{display:"flex",flexDirection:"column",width:"250px",height:"350px", backgroundColor:"#F9F9F9",padding:"8px",margin:"8px"}}>
    <img src="https://png.pngtree.com/thumb_back/fh260/background/20211031/pngtree-abstract-bg-image_914283.png" alt="" />
    <h2 className="text-green-600">{title}</h2>
    <p className="">{desc} and Post No: is {randomInt()}</p>
    </div>
    </>
    )
}

 
export {
    Post,
}