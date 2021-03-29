export function getAllImageAssets () {
    let folderPathContext = require.context("../../assets/dashboardAssets", false, /\.(png|jpe?g|svg)$/);
    // console.log(folderPathContext)
    let images = {};
    folderPathContext.keys().map((item, index) => {
    // console.log(item)
    let obj=folderPathContext(item);
    images[item.replace('./', '').split('.')[0]]=obj.default
    
    });
    // console.log(images.PurchaseOrders_Active.default.data)
    return images;
    }
