import style from './style.scss';

import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header>
          <headerTop>
              <div class="container">
                  <div class="row">
                      <div class="col-sm-2">
                          <currencyselector></currencyselector>
                      </div>
                      <div class="col-sm-10">
                          <div class="shop-menu pull-right">
                              <ul class="nav navbar-nav">
                                  <li><a href="#"><i class="fa fa-cog"></i> Register</a></li>
                                  <li><a href="#"><i class="fa fa-power-off"></i> Log in</a></li>
                                  <li>
                                      <a href="#" class="ico-wishlist">
                                          <span class="cart-label"><i class="fa fa-star"></i> Wishlist</span>
                                          <span class="wishlist-qty">(0)</span>
                                      </a>
                                  </li>
                                  <li id="topcartlink">
                                      <a ui-sref="shoppingCart" class="ico-cart">
                                          <span class="cart-label"><i class="fa fa-shopping-cart"></i> Shopping cart</span>
                                          <mycart></mycart>
                                          <i class="fa fa-angle-down"></i>
                                      </a>                       
                                  </li>                      
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </headerTop>
          <div> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores porro similique, cum optio. Optio vitae vel suscipit maxime explicabo modi, neque incidunt assumenda cum libero accusamus odit ipsa sunt amet reprehenderit inventore voluptas cumque, tempora veniam molestiae expedita corporis ipsam. Consequatur error officia, a eius sed, obcaecati aspernatur aperiam unde dolores porro dolorem, quasi enim facilis est explicabo sapiente fugit corporis in quisquam voluptates ducimus. Fugiat cupiditate culpa pariatur dicta, sequi dolor fuga iure voluptatibus vero, libero quos reprehenderit maxime illo voluptates cumque harum corporis repudiandae, adipisci veritatis in eius. Nobis libero, quae beatae! Quaerat nihil officia corporis iusto incidunt cum tenetur fugiat voluptates similique suscipit saepe, nemo. Sit iusto error porro officiis, quos voluptate sapiente odit tenetur ipsam odio quidem sed? Odit ducimus neque non quo fugiat saepe officiis odio deleniti vero accusamus sunt fuga, quisquam beatae illo, nesciunt explicabo, quia architecto, assumenda aut consequatur hic. Ducimus, similique adipisci sit eligendi dolor exercitationem, obcaecati rem iure cupiditate possimus qui quam ratione, ipsa perferendis eveniet cum corporis voluptate totam assumenda accusantium dolorum id. Architecto saepe et minima dolores quis laudantium pariatur, magni? Animi quisquam aspernatur, cupiditate nostrum, earum hic officia doloremque tempora voluptas! Rerum dolorum est quasi cumque fugit nostrum in minima quos deserunt? Minus corrupti autem sit eaque eligendi porro, architecto est numquam voluptatem. Repudiandae perspiciatis, quibusdam, ratione molestias aliquid eveniet rem quaerat saepe est unde odit, incidunt libero beatae alias corporis tenetur aut perferendis, error sint voluptate. Doloribus minima, similique a! Dolor ut iure est, sit temporibus veritatis adipisci quae, eum enim totam sapiente voluptas tempora harum laudantium eos perferendis provident sunt. Doloremque sed consectetur sunt quaerat, nihil porro voluptas, laudantium ipsum nam aperiam quasi repudiandae eius expedita, possimus rerum incidunt illo. Debitis distinctio commodi asperiores possimus recusandae molestias repudiandae tenetur labore pariatur. Optio numquam placeat laborum pariatur, dolore totam maxime incidunt rem sapiente. Iste accusamus eveniet, odio ratione laborum impedit! Eum aut distinctio architecto dolor corrupti, quos ex soluta consectetur in ea. Beatae perferendis minima unde porro quod corporis deserunt aut at sint numquam omnis ducimus repellendus dolore delectus non ullam temporibus labore aperiam magni modi rem vitae neque veritatis, autem! Dolorum laboriosam sed, hic nemo accusantium quia consectetur ipsum perferendis quo, voluptatem rerum ex! Molestiae excepturi alias nihil assumenda officiis, magnam debitis eligendi maiores ea, optio voluptas culpa asperiores! Reiciendis eaque fugit possimus soluta libero pariatur, quidem voluptatibus quas reprehenderit aliquam, ullam, esse ut omnis facilis eius cumque! Et, nobis. Cum maiores nulla eligendi vel in deserunt aliquid reiciendis pariatur, quos aspernatur cupiditate saepe mollitia veniam non delectus, dolorem porro quibusdam voluptates? Laboriosam dolores alias iste placeat recusandae consequuntur id nulla mollitia officia, ipsa laborum quae reprehenderit, facere vero cumque neque quo et repudiandae asperiores quam, nihil praesentium. Minus voluptates sapiente recusandae sit qui nostrum modi perspiciatis. Suscipit rem officia, omnis veritatis facilis aspernatur, dolorem quasi iure, sint vel explicabo. Quidem obcaecati modi quam, temporibus nostrum fuga laboriosam provident aliquid velit fugit natus error saepe assumenda eaque quo facere accusamus aut. Blanditiis ex, doloremque quis, similique quibusdam odio magni nam. At harum sapiente vitae aspernatur dolores recusandae enim sit! Neque, fuga vero vitae non incidunt perspiciatis debitis, dolor ad quisquam dolore repudiandae, voluptatum quos facilis. Facere laboriosam, labore consequatur voluptates, vel reiciendis odio. Quam enim eligendi quasi tempore alias dolore soluta accusamus officia maxime a? Eaque beatae repellendus adipisci consectetur fugit expedita ducimus qui pariatur! Eos excepturi eaque, labore! Aperiam neque delectus impedit excepturi labore quos hic ad eos laudantium quae accusantium quisquam cupiditate assumenda, ex velit aut animi ea vitae quidem ullam voluptatibus error. Asperiores in, officiis molestiae. Perferendis, ut obcaecati suscipit ab quibusdam, impedit dolorum quod facilis sed error quam. Eum, harum, distinctio? Possimus nihil doloremque ab, quos, repudiandae molestias sit incidunt delectus nemo temporibus. Corporis modi reprehenderit eos voluptates quia minus, nemo eligendi cum nobis minima porro, doloribus ab vitae pariatur excepturi laborum veniam itaque perspiciatis, non velit ex, expedita dicta. Qui rerum maiores est! Et voluptatibus asperiores excepturi alias expedita magni repudiandae minima, officiis possimus, aliquam eos! Quidem impedit illum voluptatum corrupti iure voluptate ad distinctio suscipit qui tempore voluptatem esse, provident enim nesciunt perspiciatis atque nisi! Alias, totam mollitia esse porro dignissimos architecto voluptatum est obcaecati sunt saepe similique cupiditate quidem perspiciatis unde, adipisci, soluta! Laboriosam cupiditate eum recusandae ea praesentium, itaque nemo libero. Eum, corrupti aliquid blanditiis pariatur cumque, dolor sit perferendis adipisci sapiente impedit harum fuga velit, quod magni id tenetur eaque sunt exercitationem incidunt mollitia suscipit reprehenderit obcaecati nulla commodi? Ea hic iusto nostrum quia dolorem expedita necessitatibus fugiat eligendi eaque. Non pariatur, atque eius ipsum eveniet cum ut perferendis, facere, voluptates quas maxime illum libero necessitatibus corrupti deserunt dicta ducimus eos ratione voluptate. Quas laborum libero hic ducimus sequi cumque dicta quod vel et in, voluptates praesentium perferendis voluptas atque error ipsa ipsum fuga quidem. Id voluptatibus quibusdam molestiae illum rerum, eius architecto voluptatum eaque dicta libero laborum dolor dolore nostrum ipsa veritatis similique vel minima soluta saepe quam cumque excepturi placeat ut rem. Earum pariatur laborum cupiditate officia minus. Eveniet, repudiandae! Beatae atque esse possimus veritatis dolorum cupiditate, ea tenetur ipsum, ullam, placeat asperiores temporibus eaque maxime et nostrum nam adipisci quisquam. Vero aliquam quis laborum dolores doloribus sapiente praesentium dignissimos odit. Voluptatibus est eveniet reiciendis, nihil odit maiores sequi hic quisquam ipsam ducimus temporibus velit excepturi ex quibusdam quos sit tenetur saepe corporis eos beatae magni facilis. Culpa enim, excepturi officia dignissimos fugit, iusto ipsam eveniet facilis pariatur ea ad sed mollitia vero natus alias quisquam quibusdam eius ducimus molestias laborum. Quos officiis in natus ab beatae iste error eligendi fugiat tempore aspernatur! Delectus illo quae consectetur dolore molestias, itaque velit, earum laborum. Neque molestias aspernatur aut provident esse rerum veritatis maxime vel quod id voluptatibus velit reiciendis autem odio numquam, praesentium ullam. Delectus placeat aperiam voluptatibus nesciunt tenetur officia fuga, a labore quae, consequatur nam iure, iusto tempore velit molestias facere, ab soluta! Velit asperiores hic, delectus dignissimos! Et esse modi, consequuntur inventore sapiente quisquam odit atque expedita maiores suscipit non, fugiat, unde tenetur.</div>
          <headerBottom>
              <div class="container">
                    <div class="row">
                          <div class="col-sm-6">
                                <div class="logo">
                                    <a ui-sref="home"><img src="assets/images/home/logo.png" alt="" /></a>
                                </div>
                          </div>
                          <div class="col-sm-6">
                                <searchbox></searchbox>
                          </div>
                    </div>
              </div>
          </headerBottom>
          <mynavigation></mynavigation>
      </header>
    );
  }
}


