<div class="container-fluid" ng-controller="footerCtrl">
    <div class="row footer">
        <!-- Footer Section -->
        <footer class="footer">
            <div class="container">
                <div class="columns">
                    <div class="column is-6" id="left-footer-section">
                        <div id="footer-logo">
                            <a href="index.html">
                                <img src="images/logo.png" alt="VOH Logo">
                            </a>
                        </div>
                        <div id="footer-slogan">
                            <p>Helping people find the right stylist.</p>
                        </div>
                    </div>
                    <!-- end of left-footer-section -->
                    <div class="column is-6" id="right-footer-section">
                        <div id="footer-join-slogan">
                            <p>Become A Member Of Voice Of Hair</p>
                        </div>
                        <div id="footer-join-btn">
                            <a href="signup.html" class="button action-btn">Sign Up</a>
                        </div>
                    </div>
                    <!-- end of right-footer-section -->
                </div>
                <div class="columns">
                    <div class="column is-12" id="footer-social-section">
                        <div id="footer-social-icons">
                            <a href="#" class="social-icon"><img src="images/insta-icon.png" alt="">
                            </a>
                            <a href="#" class="social-icon"><img src="images/pinterest-icon.png" alt="">
                            </a>
                            <a href="#" class="social-icon"><img src="images/facebook-icon.png" alt="">
                            </a>
                            <a href="#" class="social-icon"><img src="images/twitter-icon.png" alt="">
                            </a>
                            <a href="#" class="social-icon"><img src="images/g-plus-icon.png" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</div>
<div id="bottom-footer">
    <div class="container">
        <div class="columns">
            <div class="column is-one-third">
                <p>&copy; 2016 voiceofhair.com All Rights Reserved</p>
            </div>
            <div class="column">
                <div id="bottom-footer-links">
                    <a ui-sref="about">About</a>
                    <a href="#">Legal Information</a>
                    <a ui-sref="contact">Contact</a>
                    <a href="#">Terms Of Service</a>
                    <a href="#">Privacy Policy</a>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="/js/vendor/jquery-3.0.0.min.js"></script>
<script src="/js/vendor/angular.min.js"></script>
<script src="/js/vendor/angular-ui-router.min.js"></script>
<script src="/js/vendor/lodash.min.js"></script>
<script src="/data/stylists-data.js"></script>
<script src="/js/vendor/satellizer.min.js"></script>
<script src="/js/vendor/ui-bootstrap-tpls-2.1.4.min.js"></script>
<script src="/js/vendor/angular-bootstrap-lightbox.js"></script>
<script src="/js/vendor/ngStorage.min.js"></script>
<script src="/js/vendor/loaders.css.js"></script>
<script src="/js/vendor/ng-file-upload-all.min.js"></script>
<script src="/js/vendor/angular-sanitize.min.js"></script>
<!-- Vendor JavaScript Libraries -->
<script src="./js/vendor/ng-sticky.js"></script>

<!--Angular Application-->
<script src="./js/app/app.js"></script>

<!-- Controllers -->
<script src="./js/app/stylists/stylist.controller.js"></script>
<script src="./js/app/blog/blog.controller.js"></script>
<script src="./js/app/register/register.controller.js"></script>
<script src="./js/app/thanks/thanks.controller.js"></script>
<script src="./js/app/profile/profile.controller.js"></script>
<script src="./js/app/profile/account.controller.js"></script>
<script src="./js/app/login/login.controller.js"></script>
<script src="./js/app/gallery/gallery.controller.js"></script>
<script src="./js/app/about/about.controller.js"></script>
<script src="./js/app/courses/courses.controller.js"></script>
<script src="./js/app/for-stylists/for-stylists.controller.js"></script>
<script src="./js/app/contact/contact.controller.js"></script>
<script src="./js/app/home/home.controller.js"></script>

<!-- Services -->
<script src="./js/app/services/users.service.js"></script>
<script src="./js/app/services/authtoken.js"></script>
<script src="./js/app/services/authinterceptor.js"></script>
<script src="./js/app/services/auth.js"></script>
</body>

</html>