!function(name,path,ctx){
  var latest,prev=name!=='Keen'&&window.Keen?window.Keen:false;ctx[name]=ctx[name]||{ready:function(fn){var h=document.getElementsByTagName('head')[0],s=document.createElement('script'),w=window,loaded;s.onload=s.onerror=s.onreadystatechange=function(){if((s.readyState&&!(/^c|loade/.test(s.readyState)))||loaded){return}s.onload=s.onreadystatechange=null;loaded=1;latest=w.Keen;if(prev){w.Keen=prev}else{try{delete w.Keen}catch(e){w.Keen=void 0}}ctx[name]=latest;ctx[name].ready(fn)};s.async=1;s.src=path;h.parentNode.insertBefore(s,h)}}
}('Analytics','https://d26b395fwzu5fz.cloudfront.net/keen-tracking-0.1.0.min.js',this);

Analytics.ready(function(){

  var clientOne = new Analytics({
    projectId: "56561253e0855757577cb061",
    writeKey: "166193fec150201c5383a25773eef49fea62331138772e25f8cb08295aa1883b3fb53a4ec2c871d4316e95a00b1c1e2a3d66f756eddbe421955ea0abc3f08586ebc9b8d9ee48639134584f8d5ea2447e207abd0a0480538c4c850702eae6bc2d73a0c2711c82d626eb7c2683b709425a"
  });

  var sessionCookie = Analytics.utils.cookie('keen-example-cookie');
  if (!sessionCookie.get('user_id')) {
      sessionCookie.set('user_id', Analytics.helpers.getUniqueId());
  }

  var sessionTimer = Analytics.utils.timer();
  sessionTimer.start();

  // THE BIG DATA MODEL!

  clientOne.extendEvents(function(){
      return {
          page: {
              title: document.title,
              url: document.location.href
              // info: {} (add-on)
          },
          referrer: {
              url: document.referrer
              // info: {} (add-on)
          },
          tech: {
              browser: Analytics.helpers.getBrowserProfile(),
              // info: {} (add-on)
              ip: '${keen.ip}',
              ua: '${keen.user_agent}'
          },
          time: Analytics.helpers.getDatetimeIndex(),
          visitor: {
              id: sessionCookie.get('user_id'),
              time_on_page: sessionTimer.value()
          },
          // geo: {} (add-on)
          keen: {
              timestamp: new Date().toISOString(),
              addons: [
                  {
                      name: 'keen:ip_to_geo',
                      input: {
                          ip: 'tech.ip'
                      },
                      output: 'geo'
                  },
                  {
                      name: 'keen:ua_parser',
                      input: {
                          ua_string: 'tech.ua'
                      },
                      output: 'tech.info'
                  },
                  {
                      name: 'keen:url_parser',
                      input: {
                          url: 'page.url'
                      },
                      output: 'page.info'
                  },
                  {
                      name: 'keen:referrer_parser',
                      input: {
                          page_url: 'page.url',
                          referrer_url: 'referrer.url'
                      },
                      output: 'referrer.info'
                  }
              ]
          }
      };
  });
  clientOne.recordEvent('pageview');
});
