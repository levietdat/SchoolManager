$(function () {
    $.ajax({
      type: "GET",
      url: "http://localhost:3000/teacher/",
      success: (datas) => {
        $.each(datas, function (i, data) {
            console.log(data)
          $(".list-teacher").append(` <div class="row" data-id="${data.MaGV}">
          <div class="nameDetails col-2 ">
          ${data.name}
          </div>
          <div class="studenCode col-2 ">
          ${data.MaGV}
          </div>
          <div class="age col-2 ">
          ${data.age}
          </div>
          <div class="gender col-2 ">
          ${data.gender}
          </div>
          <div class="className col-2 ">
          ${data.className}
          </div>
           <div class="btn-dl-p col-2" style="display:flex">
                   <button class="delete"> Delete</button>
                   <button class="put"> Update</button>
               </div>
          
          </div> 
      `);
        });
      },
    });
  
    $(".create-btn").on("click", () => {
  
      const svItem = {
        name: $(".create .name").val(),
        MaGV: $(".create .student-code").val(),
        age: $(".create .age").val(),
        gender: $(".create .gender").val(),
        className: $(".create .class-name").val(),
      };
  
      $.ajax({
        type: "POST",
        url: "http://localhost:3000/teacher/",
        data: svItem,
        success: function (sv) {
          if (
            svItem.name === "" ||
            svItem.MaGV === "" ||
            svItem.age === "" ||
            svItem.gender === "" ||
            svItem.className === ""
          ) {
            alert("khoong duoc de trong");
          } else {
            $(".list-teacher").append(`
                <div class="row" data-id=${svItem.MaGV}>
                <div class="name col-2 ">
                    ${svItem.name}
                    </div>
                    <div class="studenCode  col-2 ">
                    ${svItem.MaGV}
                    </div>
                    <div class="age col-2 ">
                    ${svItem.age}
                    </div>
                    <div class="gender col-2 ">
                    ${svItem.gender}
                    </div>
                    <div class="className col-2 ">
                    ${svItem.className}
                    </div>
                    <div class="col-2">
                         <button class="delete "> Delete</button>
                         <button class="put"> Update</button>
                     </div>
                </div>
                `);
          }
          $(".create .name").val("");
          $(".create .student-code").val("");
          $(".create .age").val("");
          $(".create .gender").val("");
          $(".create .className").val("");
        },
      });
      // location.reload();
    });
    $(document).ready(function () {
      $(document).on("click", ".delete", (e) => {
        const child = e.target;
        const parentNodechild = child.parentNode.parentNode;
        parentNodechild.remove();
        const id = parentNodechild.getAttribute("data-id");
        $.ajax({
          type: "DELETE",
          url: "http://localhost:3000/teacher/" + id,
        });
        success: (datas) => {
          console.log(datas);
          console.log("Xoá Thành Công");
        };
        // location.reload()
      });
    });
  
    const update = (id) => {
      $.ajax({
        url: "http://localhost:3000/teacher",
        type: "GET",
        success: (datas) => {
          for (let i = 0; i < datas.length; ++i) {
            $(".put").on("click", (e) => {
              $(".create-btn").addClass("d-none");
              $(".update-btn").removeClass("d-none");
              const indexOfSvItem = $(".put").index(e.target);
              $(".create .name").val(datas[indexOfSvItem].name);
              $(".create .student-code").val(datas[indexOfSvItem].MaGV);
              $(".create .age").val(datas[indexOfSvItem].age);
              $(".create .gender").val(datas[indexOfSvItem].gender);
              $(".create .class-name").val(datas[indexOfSvItem].className);
            });
          }
        },
      });
      $(".update-btn").on("click", (e) => {
        const svItem = {
          name: $(".create .name").val(),
          MaGV: $(".create .student-code").val(),
          age: $(".create .age").val(),
          gender: $(".create .gender").val(),
          className: $(".create .class-name").val(),
        };
      const id =  $('.create .student-code').val()
        $.ajax({
         url: "http://localhost:3000/teacher/"+id,
         type: "PUT",
         data:svItem,
         success: () =>{
          if (
            svItem.name === "" ||
            svItem.MaGV === "" ||
            svItem.age === "" ||
            svItem.gender === "" ||
            svItem.className === ""
          ) {
            alert("khoong duoc de trong");
          } else {
            $(".list-sv").append(`
                <div class="row" data-id=${svItem.MaGV}>
                <div class="name col-2 ">
                    ${svItem.name}
                    </div>
                    <div class="studenCode  col-2 ">
                    ${svItem.MaGV}
                    </div>
                    <div class="age col-2 ">
                    ${svItem.age}
                    </div>
                    <div class="gender col-2 ">
                    ${svItem.gender}
                    </div>
                    <div class="className col-2 ">
                    ${svItem.className}
                    </div>
                    <div class="col-2">
                         <button class="delete "> Delete</button>
                         <button class="put"> Update</button>
                     </div>
                </div>
                `);
          }
          $(".create .name").val("");
          $(".create .student-code").val("");
          $(".create .age").val("");
          $(".create .gender").val("");
          $(".create .className").val("");
        },
       })
       location.reload();
      })
    };
    $(document).ready(function () {
      $(document).on("click", ".delete", (e) => {
        const child = e.target;
        const parentNodechild = child.parentNode.parentNode;
        parentNodechild.remove();
        const id = parentNodechild.getAttribute("data-id");
        $.ajax({
          type: "DELETE",
          url: "http://localhost:3000/teacher/" + id,
        });
        success: (datas) => {
          console.log(datas);
          console.log("Xoá Thành Công");
        };
        // location.reload()
      });
      
    });
    $(document).ready(function () {
      update();
      $(".myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".list-teacher .row").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) >-1)
        });
      })
      // $('.student').on('click',(e)=>{
      //   e.preventDefault();
      //   $('#teacher-block').hide()
      //   $('#student-block').show()
      // })
  
      // $('.teacher').on('click',(e)=>{
      //   e.preventDefault();
      //   $('#student-block').hide()
      //   $('#teacher-block').show()
      // })
    });
  });
  