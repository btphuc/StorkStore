<template>
    <div class="header-area header-area-5  clearfix">
	    <!-- Header Top 5 -->
        <div class="header-top header-top-5">
            <div class="container">
                <div class="row">
                    <!-- Header Top Left 5 -->
                    <div class="header-top-left header-top-left-4 col-xs-4 text-left hidden-lg hidden-md">
                        <!-- Header Search -->
                        <div class="header-search header-search-4 float-left">
                            <button data-toggle="dropdown" class="search-toggle"><i class="zmdi zmdi-search"></i></button>
                            <div class="search-dropdown dropdown-menu left">
                                <form action="#">
                                    <input type="text" placeholder="Search Product..." />
                                    <input type="submit" class="search-submit">
                                </form>
                            </div>
                        </div>
                        <!-- Language & Currency -->
                        <div class="language-currency language-currency-4 hidden-xs float-left">
                            <ul class="language">
                                <li><a href="#" data-toggle="dropdown">VI</a>
                                    <ul class="dropdown-menu left">
                                        <li><a href="#">Việt Nam</a></li>
                                        <li><a href="#">English</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <ul class="currency">
                                <li><a href="#" data-toggle="dropdown">VND</a>
                                    <ul class="dropdown-menu left">
                                        <li><a href="#">VND</a></li>
                                        <li><a href="#">USD</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- Header Top Center 5 -->
                    <div class="header-top-center header-top-center-5 col-md-12 col-xs-4 text-center">
                        <a href="index.html" class="logo-2"><img src="img/logo.png" alt="logo" /></a>
                    </div>
                    <!-- Header Top Right 5 -->
                    <div class="header-top-right header-top-right-4 col-xs-4 text-right hidden-lg hidden-md">
                        <!-- Account Menu -->
                        <div class="account-menu account-menu-6 float-right">
                            <button data-toggle="dropdown" class="acc-menu-toggle"><i class="zmdi zmdi-settings"></i></button>
                            <ul class="acc-menu-dropdown dropdown-menu right">
                                <li><a href="#">account</a></li>
                                <li><a href="#">check out</a></li>
                                <li><a href="#">wishlist</a></li>
                                <li><a href="#">log in</a></li>
                                <li><a href="#">cart</a></li>
                            </ul>
                        </div>
                        <!-- Mini Cart -->
                        <div class="mini-cart-wrapper mini-cart-wrapper-4 float-right">
                            <a href="#" data-toggle="dropdown" class="mini-cart-btn"><span><i class="zmdi zmdi-shopping-cart"></i><span class="cart-number">2</span></span></a>
                            <div class="mini-cart dropdown-menu right">
                                <div class="mini-cart-product fix">
                                    <a href="product-details-1.html" class="image"><img src="img/mini-cart/1.jpg" alt="" /></a>
                                    <div class="content fix">
                                        <a href="product-details-1.html" class="title">Fashion Style</a>
                                        <p>Color: Black</p>
                                        <p>Size: SL</p>
                                        <button class="remove"><i class="zmdi zmdi-close"></i></button>
                                    </div>
                                </div>
                                <div class="mini-cart-product fix">
                                    <a href="product-details-1.html" class="image"><img src="img/mini-cart/2.jpg" alt="" /></a>
                                    <div class="content fix">
                                        <a href="product-details-1.html" class="title">Fashion Style</a>
                                        <p>Color: Black</p>
                                        <p>Size: SL</p>
                                        <button class="remove"><i class="zmdi zmdi-close"></i></button>
                                    </div>
                                </div>
                                <div class="mini-cart-product fix">
                                    <a href="product-details-1.html" class="image"><img src="img/mini-cart/3.jpg" alt="" /></a>
                                    <div class="content fix">
                                        <a href="product-details-1.html" class="title">Fashion Style</a>
                                        <p>Color: Black</p>
                                        <p>Size: SL</p>
                                        <button class="remove"><i class="zmdi zmdi-close"></i></button>
                                    </div>
                                </div>
                                <div class="mini-cart-checkout text-center">
                                    <a href="checkout.html">checkout</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Header Bottom 5 -->
        <div class="header-bottom sticky header-bottom sticky-5">
            <div class="container">
                <div class="row">
                    <!-- Header Bottom Left 5 -->
                    <div class="header-bottom sticky-left header-bottom sticky-left-5 col-md-2 text-left hidden-sm hidden-xs">
                        <div class="language-currency language-currency-5 float-left">
                            <ul class="language">
                                <li><a href="#" data-toggle="dropdown">VI</a>
                                    <ul class="dropdown-menu left">
                                        <li><a href="#">Việt Nam</a></li>
                                        <li><a href="#">English</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <ul class="currency">
                                <li><a href="#" data-toggle="dropdown">VND</a>
                                    <ul class="dropdown-menu left">
                                        <li><a href="#">VND</a></li>
                                        <li><a href="#">USD</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- Menu Wrapper 4 -->
                    <div class="menu-wrapper menu-wrapper-4 text-center col-md-8 col-xs-12 hidden-sm hidden-xs">
                        <div class="menu menu-4">
                            <HeaderNav />
                        </div>
                    </div>
                    <!-- Header Bottom Right 5 -->
                    <div class="header-bottom sticky-right header-bottom sticky-right-4 col-md-2 text-right hidden-sm hidden-xs">
                        <div class="account-menu account-menu-5 float-right">
                            <button data-toggle="dropdown" class="acc-menu-toggle"><i class="zmdi zmdi-settings"></i></button>
                            <ul class="acc-menu-dropdown dropdown-menu right">
                                <li><a href="#">account</a></li>
                                <li><a href="#">check out</a></li>
                                <li><a href="#">shop</a></li>
                                <li><a href="#">wishlist</a></li>
                                <li><a href="#">log in</a></li>
                                <li><a href="#">cart</a></li>
                            </ul>
                        </div>
                        <div class="header-search header-search-5 float-right">
                            <button data-toggle="dropdown" class="search-toggle"><i class="zmdi zmdi-search"></i></button>
                            <div class="search-dropdown dropdown-menu right">
                                <form action="#">
                                    <input type="text" placeholder="Search Product..." />
                                    <input type="submit" class="search-submit">
                                </form>
                            </div>
                        </div>
                        <div class="mini-cart-wrapper mini-cart-wrapper-5 float-right">
                            <a href="#" data-toggle="dropdown" class="mini-cart-btn"><span><i class="zmdi zmdi-shopping-cart"></i><span class="cart-number">2</span></span></a>
                            <div class="mini-cart dropdown-menu right">
                                <div class="mini-cart-product fix">
                                    <a href="product-details-1.html" class="image"><img src="img/mini-cart/1.jpg" alt="" /></a>
                                    <div class="content fix">
                                        <a href="product-details-1.html" class="title">Fashion Style</a>
                                        <p>Color: Black</p>
                                        <p>Size: SL</p>
                                        <button class="remove"><i class="zmdi zmdi-close"></i></button>
                                    </div>
                                </div>
                                <div class="mini-cart-product fix">
                                    <a href="product-details-1.html" class="image"><img src="img/mini-cart/2.jpg" alt="" /></a>
                                    <div class="content fix">
                                        <a href="product-details-1.html" class="title">Fashion Style</a>
                                        <p>Color: Black</p>
                                        <p>Size: SL</p>
                                        <button class="remove"><i class="zmdi zmdi-close"></i></button>
                                    </div>
                                </div>
                                <div class="mini-cart-product fix">
                                    <a href="product-details-1.html" class="image"><img src="img/mini-cart/3.jpg" alt="" /></a>
                                    <div class="content fix">
                                        <a href="product-details-1.html" class="title">Fashion Style</a>
                                        <p>Color: Black</p>
                                        <p>Size: SL</p>
                                        <button class="remove"><i class="zmdi zmdi-close"></i></button>
                                    </div>
                                </div>
                                <div class="mini-cart-checkout text-center">
                                    <a href="checkout.html">checkout</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Mobile Menu Wrapper 2 -->
                    <div class="mobile-menu-wrapper mobile-menu-wrapper-2 hidden-md hidden-lg col-xs-12">
                        <div class="mobile-menu mobile-menu-2">
                            <HeaderNav />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderNav from '@/components/Layout/Header/HeaderNav.vue';

export default {
    components: {
        HeaderNav
    }
}

</script>

<style scoped>

</style>
