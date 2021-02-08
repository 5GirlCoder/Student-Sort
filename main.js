var StudentArray = [];
function Submit() 
{
    var Name1 = document.getElementById("Student1").value;
    var Name2 = document.getElementById("Student2").value;
    var Name3 = document.getElementById("Student3").value;
    var Name4 = document.getElementById("Student4").value;
    StudentArray.push(Name1);
    StudentArray.push(Name2);
    StudentArray.push(Name3);
    StudentArray.push(Name4);
    document.getElementById("NameDisplay").innerHTML = StudentArray;
    document.getElementById("SubmitButton").style.display = "none";
    document.getElementById("SortButton").style.display = "inline-block";
}
function Sorting()
{
    StudentArray.sort();
    document.getElementById("NameDisplay").innerHTML = StudentArray;
}