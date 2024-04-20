import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Platform, ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular'; 
import { File, IWriteOptions } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
//const { Camera, Filesystem } = Plugins;
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;
//(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;



@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.page.html',
  styleUrls: ['./invoice.page.scss'],
})
export class InvoicePage implements OnInit {

  myForm: FormGroup;
  pdfObj = null;
  //base64Image = null;
  photoPreview = null;
  logoData = null;

  newInv = {}
  invId
  invName
  invDate
  invContact
  invRoom
  invNight
  invPrice

  
  
  //pdfObj:any;

  constructor(private fb: FormBuilder,
    private plt: Platform,
    private http:HttpClient,
    private fileOpener: FileOpener,
    //private transfer: FileTransfer,
    private file: File,
    private toastController: ToastController) {
    }

    setPrice(invNight: number): string{
      return "RM" + (this.invNight * 120).toString();
    }
    

  createPdf() {

    //try{
      //var docObj=this.getPdfDefination();
      //this.pdfObj = pdfMake.createPdf(this.getPdfDefination).open;
    //}
    //catch(err){}

    const formValue = this.myForm.value;
    const image = this.photoPreview ? { image: this.photoPreview, width: 300 } : {};

    let logo = {};
    if (formValue.showLogo) {
      logo = { image: this.logoData, width: 50};
    }
    
    console.log("PDf triggered")

    const docDefinition = {
      content: [
              
        {
	        
	        columns: [
	            {
	            text: '',
	            },
                
                {
                text: 'Invoice',
                style: 'header',
                alignment: 'right',
                fontSize: 18
                }
	            
	        ]
        },
        {text: '   '},
        {text: '   '},
        {text: '   '},
        
        
        
        
        {
			columns: [
				{
					text: 'Aina Riverside Homestay',
					bold: true,
					fontSize: 14
				},
				{
					text: ''
				},
			
			],
		},
        
		{
			columns: [
				{
					text: '144C, Kampung Sayong Lembah, \n 33040 Kuala Kangsar, Perak \n Tel: 013-3813002'
				},
				{
					text: ''
				},
				{
				    columns: [
				        	{text: 'No :', alignment:'right'},
					        {text: this.invId, alignment: 'right'},
					       
				        ],
				},
			],
		},
		
		{
			columns: [
				{
					text: ''
				},
				{
					text: ''
				},
				{
				    columns: [
				        	{text: 'Date:', alignment: 'right'},
					        {text: this.invDate.split('T')[0], alignment: 'right'},
					       
				        ],
				},
			],
		},
		 //     {
		  //      	image: 'sampleImage.jpg',
			 //       width: 150,
			  //      height: 150,
		     // },
            
            {text: 'To Customer :', fontSize: 12, bold: true, margin: [0, 20, 0, 8]},
        
            {text: 'Name  :', fontSize: 12, margin: [0, 10, 0, 8]},
            {text: this.invName, fontSize: 12, margin: [70, -22, 0, 0]},
            {text: 'Phone  :', fontSize: 12, margin: [0, 10, 0, 8]},
            {text: this.invContact, fontSize: 12, margin: [70, -21, 0, 50]},
            
            {
              style: 'tableExample',
              table: {
                  widths: [100, 100, 150, 100],
                  body: [
                      ['Room', 'Nights', 'Price', 'Amount'],
                      [this.invRoom, this.invNight, 'RM120', this.setPrice(this.invNight)]
                      
                  ]
              }
            },
        
            {text: 'Remarks/Notes:', fontSize: 14, bold: true, margin: [0, 50, 0, 0]},
            {text: 'Total  :', fontSize: 14, bold: true, margin: [380, -16, 0, 8]},
            {text: this.setPrice(this.invNight), fontSize: 14, margin: [440, -25, 0, 20]},

            {
              style: 'tableExample',
              table: {
                heights: [150],
                body: [
                  ['----------------------------------------------------------------']
                  
                ]
              }
            },
      ],
    	images: {
	    	building: 'data:image/jpeg;base64,/9j/'
	    }
      
    }
    this.pdfObj = pdfMake.createPdf(docDefinition);
    console.log(this.pdfObj);

  }

  downloadPdf(){
  if (this.plt.is('cordova')) {     

//      this.pdfObj.getBase64(async (data) => {
//        try {
//          let path = 'pdf/myletter_${Date.now()}.pdf';

//          const result = await Filesystem.writeFile({
//            path,
//            data,
//            directory: Directory.Documents,
//            recursive: true
//          });
//          this.fileOpener.open('${result.uri}', 'application/pdf');
      //  this.fileOpener.open(result.uri, 'application/pdf');

//        } catch (e) {
//          console.error('Unable to write file', e);
//        }
//      });

//  ori  } else {                          
//  ori    this.pdfObj.download();         
//  ori  }                                 

// ---- COPILOT ----
//   if (this.plt.is('cordova')) {
//    const fileTransfer: FileTransferObject = this.transfer.create();
//    const pdfUrl = 'URL_TO_YOUR_PDF_FILE';

//    fileTransfer.download(pdfUrl, this.file.externalDataDirectory + 'myfile.pdf').then((entry) => {
//      console.log('Download complete: ' + entry.toURL());
      // Handle success here
//    }, (error) => {
//      console.log('Download error: ' + JSON.stringify(error));
//      // Handle error here
//    });
//  } else {
//    this.pdfObj.download();
//  }

//  ---- COPILOT ----

 
   // this.pdfObj.download();

//   const pdfBlob = this.pdfObj.getBlob();

//   const currentDate = new Date().toISOString().replace(/:/g, '-');

//   const directory = this.file.externalRootDirectory + 'Download/';
//   const fileName = 'invoice_' + currentDate + '.pdf';

//   if (this.plt.is('cordova')) {
//    this.pdfObj.getBuffer((buffer) => {
//    var blob = new Blob([buffer], { type: 'application/pdf' });
    
        // Save the PDF to the data Directory of our App
//        this.file.writeFile(directory, 'myletter.pdf', pdfBlob, { replace: true }).then(fileEntry => {
          // Open the PDf with the correct OS tools
//          this.fileOpener.open(directory + fileName, 'application/pdf');
//        })
//      });
    } else {
      // On a browser simply use download!
      this.pdfObj.download();
    }
  
  
  }




  getPdfDefination(){

    // playground requires you to assign document definition to a variable called dd

    var dd:any = {
	    content: [
		    {
          image: '.jpg',
        },
		    {
			    image: 'ionicLogo.jpg',
				  width: 150,
		    	height: 150,
		    },
		
		    {text: 'Date  :', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
	    	{text: 'Name  :', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
	    	{text: 'Phone :', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
			
	    	{
	    		style: 'tableExample',
			    table: {
			        widths: [100, 100, 150, 100],
				      body: [
					        ['Room', 'Quantity', 'Price', 'Amount'],
					        ['Bilik 1', '1', 'RM20', 'RM400'],
				        	['Bilik 2', '2', 'RM10', 'RM300']
			      	]
		    	}
		    },
		
	    	{text: 'Total  :', fontSize: 14, bold: true, margin: [0, 20, 0, 8]},
		
		
    	],
    	images: {
	    	building: 'data:image/jpeg;base64,/9j/'
	    }
	
    }
    return dd;

  }
 

  ngOnInit() {

    this.myForm = this.fb.group({
      showlogo: true,
      id: '010',
      name: 'Simon',
      date: 'Max',
      contact: 'Test',
      night: '5',
      room: 'Bilik 1'
    });
    this.loadLocalAssetToBase64();
  }

  loadLocalAssetToBase64(){
    this.http.get('./assets/img/ionicLogo.jpg', { responseType: 'blob'})
    .subscribe(res => {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.logoData = reader.result;
      }
      reader.readAsDataURL(res);
    });
  }

  async createToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Receipt is created succesfully!',
      duration: 3000,
      position: position,
    });

    await toast.present();
  }

  async downloadToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Receipt is downloaded succesfully!',
      duration: 3000,
      position: position,
    });

    await toast.present();
  }

 // async takePicture(){
   // const image = await Camera.getPhoto({
     // quality: 100,
     // allowEditing: false,
     // resultType: CameraResultType.Base64,
     // source: CameraSource.Camera
    //});
    //console.log('image');
    //this.photoPreview = 'data:image/jpeg;base64,${image.base64String}';
  //}

}
