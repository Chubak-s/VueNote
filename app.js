const App = {
    data() {
        return {
            title: "Список заметок",
            placeholderString: "Введите название заметки",
            inputValue:'',
            notes: []
        }
    },
    methods:{
      addNote(){
          if (this.inputValue!==""){
              this.notes.push(this.inputValue);
              this.inputValue='';
          }
      },
      deleteNote(index){
          this.notes.splice(index,1);
      }
    },
    computed: {
        doubleLength(){
            return this.notes.length * 2;
        },
    },
    watch: {
        inputValue(value){
            if (value.length>20){
                this.inputValue = "";
            }
            console.log('input Value changed', value)
        }
    }
}

const app = Vue.createApp(App);
app.mount('#app');
