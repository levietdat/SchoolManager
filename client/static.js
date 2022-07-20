$(function() {
    const svCount = ()=>{
        $.ajax({
            url: "http://localhost:3000/student/",
            type:"GET",
            success: (data)=>{
                    $('.count-sv span').text(data.length)
            }
        })
        
    }
    const gvCount = ()=>{
        $.ajax({
            url: "http://localhost:3000/teacher/",
            type:"GET",
            success: (data)=>{
                    $('.count-tc span').text(data.length)
                },
        })
    }
    svCount()
    gvCount()
})