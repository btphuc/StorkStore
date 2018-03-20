<template>
  <nav>
    <ul>
      <menu-item v-for="item in menu" :key="item.title" :title="item.title" :isActive="item.isActive" :subMenu="item.subMenu">
        <menu-item v-for="parent in item.subMenuList" :key="parent.id" :title="parent.title" :subMenu="parent.subMenu">
          <menu-item v-for="child in parent.subMenuList" :key="child.id" :title="child.title"></menu-item>
        </menu-item>
      </menu-item>
    </ul>
  </nav>
</template>

<script>
import MenuItem from '@/components/Element/Menu/MenuItem.vue'
import axios from 'axios';

export default {
  components: {
    MenuItem,
  },
  data () {
    return {
      menu: [
        {
          title: 'Home',
          isActive: true,
          subMenu : false,
          subMenuList: []
        },
        {
          title: 'Categories',
          isActive: false,
          subMenu : true,
          subMenuList: []
        },
        {
          title: 'Brands',
          isActive: false,
          subMenu : true,
          subMenuList: []
        },
        {
          title: 'Shop',
          isActive: false,
          subMenu : false,
          subMenuList: []
        },
        {
          title: 'Blog',
          isActive: false,
          subMenu : false,
          subMenuList: []
        },
        {
          title: 'Contact',
          isActive: false,
          subMenu : false,
          subMenuList: []
        }
      ],
    }
  },
  methods: {
    async InitCategory() {
      var data = await axios.get(`/api/category`)
      const categoryList = data.data.data
      // console.log('data ',categoryList)
      const parent = categoryList.map(this.IsParent).filter((item)=> item)
      parent.forEach(element => {
        const id  =  element.id
        var childList = categoryList
                      .filter(item => item.PARENT_ID == id)
                      .map((item, index) => {
                        return {
                          id: item.ID,
                          title: item.NAME,
                          isActive: false,
                          subMenu : false,
                          subMenuList: []
                        }
                      })
        if(childList.length != 0){
          element.subMenu = true,
          element.subMenuList = childList
        }          
      });
     this.menu[this.menu.findIndex(x=> x.title == 'Categories')].subMenuList = parent
    }
    ,
     async InitBrand() {
      var data = await axios.get(`/api/brand`)
      const brandList = data.data.data.map((item, index) => {
                        return {
                          id: item.ID,
                          title: item.NAME,
                          isActive: false,
                          subMenu : false,
                          subMenuList: []
                        }
                      })
      console.log('data ',brandList)
     this.menu[this.menu.findIndex(x=> x.title == 'Brands')].subMenuList = brandList
    }
    ,
    IsParent (item, index) {
      if(item.PARENT_ID == 0) {
        return {
          id: item.ID,
          title: item.NAME,
          isActive: false,
          subMenu : false,
          subMenuList: []
        }
      }
    }
  },
  mounted () {
    this.InitCategory()
    this.InitBrand()
  },
}

</script>

<style scoped>

</style>

