var css_file = document.createElement("link");
                                    var widgetUrl = location.href;
                                    css_file.setAttribute("rel", "stylesheet");
                                    css_file.setAttribute("type", "text/css");
                                    css_file.setAttribute("href", 'https://s.bookcdn.com/css/weather.css?v=0.0.1');
                                    document.getElementsByTagName("head")[0].appendChild(css_file);

                                    function setWidgetData_73933(data) {
                                        if (typeof(data) != 'undefined' && data.results.length > 0) {
                                            for (var i = 0; i < data.results.length; ++i) {
                                                var objMainBlock = document.getElementById('m-booked-custom-widget-73933');
                                                if (objMainBlock !== null) {
                                                    var copyBlock = document.getElementById('m-bookew-weather-copy-' + data.results[i].widget_type);
                                                    objMainBlock.innerHTML = data.results[i].html_code;
                                                    if (copyBlock !== null) objMainBlock.appendChild(copyBlock);
                                                }
                                            }
                                        } else {
                                            alert('data=undefined||data.results is empty');
                                        }
                                    }
                                    var widgetSrc = "https://widgets.booked.net/weather/info?action=get_weather_info;ver=7;cityID=18398,18171,18332,18846,18503,34820;type=2;scode=2;ltid=3457;domid=765;anc_id=79668;countday=undefined;cmetric=1;wlangID=21;color=009fde;wwidth=300;header_color=ffffff;text_color=333333;link_color=08488D;border_form=1;footer_color=ffffff;footer_text_color=333333;transparent=0;v=0.0.1";
                                    widgetSrc += ';ref=' + widgetUrl;
                                    widgetSrc += ';rand_id=73933';
                                    var weatherBookedScript = document.createElement("script");
                                    weatherBookedScript.setAttribute("type", "text/javascript");
                                    weatherBookedScript.src = widgetSrc;
                                    document.body.appendChild(weatherBookedScript)



                                    function openModal() {
                                        document.getElementById('myModal').style.display = "block";
                                      }
                                      function closeModal() {
                                        document.getElementById('myModal').style.display = "none";
                                      }
                                      var slideIndex = 1;
                                      showSlides(slideIndex);
                                      function plusSlides(n) {
                                        showSlides(slideIndex += n);
                                      }
                                      function currentSlide(n) {
                                        showSlides(slideIndex = n);
                                      }
                                      function showSlides(n) {
                                        var i;
                                        var slides = document.getElementsByClassName("mySlides");
                                        var dots = document.getElementsByClassName("demo");
                                        var captionText = document.getElementById("caption");
                                        if (n > slides.length) {slideIndex = 1}
                                        if (n < 1) {slideIndex = slides.length}
                                        for (i = 0; i < slides.length; i++) {
                                          slides[i].style.display = "none";
                                        }
                                        for (i = 0; i < dots.length; i++) {
                                          dots[i].className = dots[i].className.replace(" active", "");
                                        }
                                        slides[slideIndex-1].style.display = "block";
                                        dots[slideIndex-1].className += " active";
                                        captionText.innerHTML = dots[slideIndex-1].alt;
                                      }