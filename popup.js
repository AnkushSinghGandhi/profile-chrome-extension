var name_text = document.getElementById('name');
var website_link = document.getElementById('website_link');
// website_link.href='javascript:void(0);';
var linkedin_link = document.getElementById('linkedin_link');
// linkedin_link.href='javascript:void(0);';
var twitter_link = document.getElementById('twitter_link');
// twitter_link.href='javascript:void(0);';
var github_link = document.getElementById('github_link');
// github_link.href='javascript:void(0);';
var facebook_link = document.getElementById('facebook_link');
// facebook_link.href='javascript:void(0);';

let array = ["name","website","linkedin","twitter","github","facebook"];

function void_click(){
    void(0);
}
chrome.storage.sync.get(array,function(links){

    if(!chrome.runtime.error){
        console.log(links);
        if(links.name)
            name_text.innerHTML=escapeHtml(links.name)+"'s ";
        
        if(links.website)
            website_link.href=links.website;
        else
            website_link.addEventListener('click',function(event){
                event.preventDefault();
            });
        
        if(links.linkedin)
            linkedin_link.href=links.linkedin;
        else
            linkedin_link.addEventListener('click',function(event){
                event.preventDefault();
            });

        if(links.twitter)
            twitter_link.href=links.twitter;
        else
            twitter_link.addEventListener('click',function(event){
                event.preventDefault();
            });
        
        if(links.github)
            github_link.href=links.github;
        else
            github_link.addEventListener('click',function(event){
                event.preventDefault();
            });

        if(links.facebook)
            facebook_link.href=links.facebook;
        else
            facebook_link.addEventListener('click',function(event){
                event.preventDefault();
            });
    }
});
const escapeHtml = (input) => { 
    return input.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;').replace(/>/g, "&gt;").replace(/'/g, "&#039;");
}