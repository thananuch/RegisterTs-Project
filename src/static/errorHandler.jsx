import Swal from "sweetalert2";

export const handleApiRequestError = (error, actionType) => {
  console.error("API Request Error : " + error);

  if (error.response) {
    console.error("Error has response : " + error.response);
    console.log("1. data : " + error.response.status);
    console.log("2. data : " + error.response.headers);
    console.log("3. data : " + JSON.stringify(error.response.data));

    if (error.response.status === 401) {
      window.location.href = `/login`;
    } else if (error.response.status === 500) {
      if (actionType === "save") {
        Swal.fire({
          icon: "error",
          title: "ข้อผิดพลาด",
          text: "มีปัญหาระหว่างการบันทึก กรุณาแจ้งผู้ดูแลระบบ",
          confirmButtonText: "ตกลง",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "ข้อผิดพลาด",
          text: "มีปัญหาระหว่างการประมวลผลข้อมูล กรุณาแจ้งผู้ดูแลระบบ",
          confirmButtonText: "ตกลง",
        });
      }
    }
  } else if (error.request) {
    console.error("Error on request : " + error.request);
    Swal.fire({
      icon: "error",
      title: "ข้อผิดพลาด",
      text: "มีปัญหาการเชื่อมต่ออินเทอร์เน็ต กรุณาตรวจสอบ",
      confirmButtonText: "ตกลง",
    });
  } else {
    console.log("Error other : ", error);
    console.log("Error message : ", error.message);
  }
};
