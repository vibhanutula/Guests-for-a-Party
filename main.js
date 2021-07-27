var names_of_people = [];
    
function Submit()
{
    var GuestName = document.getElementById("Enner").value;
	// use the push function as - names_of_people.push(GuestName);
    names_of_people.push(GuestName);
	console.log(GuestName);    
    console.log(names_of_people);
    var lenght_of_name = names_of_people.length;
    console.log(lenght_of_name);
	document.getElementById("Hnc").innerHTML=names_of_people.toString();
   }



function Add()
{
	var i= names_of_people.join("<br>");
	console.log(names_of_people);
	document.getElementById("Inx").innerHTML=i.toString();
	document.getElementById("Sxe").style.display="block";
	// display the name in the id= sort_button
	}


function sorting()
	{
		names_of_people.sort();          // add the sort function
		// .the sort function is .sort();
		var i= names_of_people.join("<br>");
		console.log(names_of_people);		
		document.getElementById("sorted").innerHTML=i.toString();
		}


function searching()
{
	var s= document.getElementById("Che").value;
	var found=0;
	var j;
	for(j=0; j<names_of_people.length; j++)
		{
			if(s==names_of_people[j]){
				found=found+1;
			}	
		}
	document.getElementById("Inv").innerHTML="name found "+found+" time/s";
	console.log("found name "+found+" time/s");
}