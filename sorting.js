let dataArr=[];
let nameArr=[];
let sortedObjArr=[];
function DataGenerator(_name,_position,_office,_age,_startDate,_salary){
	this.Name=_name;
	this.Position=_position;
	this.Office=_office;
	this.Age=_age;
	this.StartDate=_startDate;
	this.Salary=_salary;
	dataArr.push(this);

}

$("#add_data_btn").click(function(){
	let data_obj=new DataGenerator(
		$("#name").val(),
		$("#position").val(),
		$("#office").val(),
		$("#age").val(),
		$("#start_date").val(),
		$("#salary").val()
		)
	createRow("#data_body",data_obj)


})

function createRow(_parent,dataObj){
	let row=$(_parent).append("<tr>")
	createColumn($(row),dataObj)
}
function createColumn(_parent,_data){
	for(let prop in _data){
		$(_parent).append("<td>"+_data[prop]+"</td>")
	}
}

function Sort(_param){
	for(let i=0;i<dataArr.length;i++){
	nameArr.push(dataArr[i][_param])
		}// end of for
	let sortedNames=nameArr.sort()

	sortedNames.forEach(function(value,index){
		for(let i=0;i<dataArr.length;i++){
			if(value==dataArr[i][_param]){
				sortedObjArr.push(dataArr[i])
			} // end of if
		}// end of for
	})// end of forEach
	document.querySelector("#data_body").innerHTML=""
	for(let i=0;i<sortedObjArr.length;i++){
		createRow("#data_body",sortedObjArr[i])
	}

	console.log(_param)
}





