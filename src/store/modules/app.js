import Cookies from 'js-cookie'
function checkHasSame(oldViews,newView) {
  return oldViews.some((old)=>{
   return old.path === newView.path
  })
}
const app = {
  state: {
    sidebar:{
      opened:!+Cookies.get('sidebarStatus')
    },
    cachedViews: [],
    visitedViews: [],
  },
  mutations:{
    TOGGLE_SIDEBAR:state => {
      if(state.sidebar.opened){
        Cookies.set('sidebarStatus',1)
      }else{
        Cookies.set('sidebarStatus',0)
      }
      state.sidebar.opened = !state.sidebar.opened
    },
    ADD_VISITED_VIEWS:(state,view) =>{
     if(!checkHasSame(state.visitedViews,view)){
       state.visitedViews.push({
         name: view.name,
         path: view.path,
         title: view.meta.title || 'no-name'
       })

       if (!view.meta.noCache) {
         state.cachedViews.push(view.name)
       }
     }

    },
    DEL_OTHERS_VIEWS: (state, view) => {
      for (const [i, v] of state.visitedViews.entries()) {
        if (v.path === view.path) {
          state.visitedViews = state.visitedViews.slice(i, i + 1)
          break
        }
      }
      for (const i of state.cachedViews) {
        if (i === view.name) {
          const index = state.cachedViews.indexOf(i)
          state.cachedViews = state.cachedViews.slice(index, index + 1)
          break
        }
      }
    },
    DEL_ALL_VIEWS: (state) => {
      state.visitedViews = []
      state.cachedViews = []
    },
    DEL_VISITED_VIEWS:(state,view)=>{
      let iteratorArray = state.visitedViews.entries();
      for(const [i ,v] of iteratorArray){
        if (v.path === view.path) {
          state.visitedViews.splice(i, 1)
          break
        }
      }
      for( const i of state.cachedViews){
        if(i === view.name){
          const index  = state.cachedViews.indexOf(i)
          state.cachedViews.splice(index,1)
          break
        }
      }
    }
  },
  actions:{
    toggleSideBar({commit}){
      commit('TOGGLE_SIDEBAR')
    },
    addVisitedViews({commit},route){
      commit('ADD_VISITED_VIEWS',route)
    },
    delVisitedViews({commit},view){
      return new Promise(resolve=>{
        commit('DEL_VISITED_VIEWS', view)
        resolve([...app.state.visitedViews])
      })

    },
    delOthersViews({ commit, state }, view) {
      return new Promise((resolve) => {
        commit('DEL_OTHERS_VIEWS', view)
        resolve([...state.visitedViews])
      })
    },
    delAllViews({ commit, state }) {
      return new Promise((resolve) => {
        commit('DEL_ALL_VIEWS')
        resolve([...state.visitedViews])
      })
    }
  }
}
export default app
