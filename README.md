# vue-adap-table
A Vue Datatable that adapts to any case. You can use as a normal table, with all the good vue things, but with built-in Sort, Search and Pagination

# Example
```html

<template>


    <div class="table-responsive">

        <div class="form-group form-inline">
            <adap-searchfield :store="adapStore" placeholder="Search"/>
        </div>

        <table class="table table-striped table-bordered table-hover">
            <thead>
                <tr>
                    <adap-th :store="adapStore" name="column1">Column 1</adap-th>
                    <adap-th :store="adapStore" name="column2">Column 2</adap-th>
                    <adap-th :store="adapStore" name="column3">Column 3</adap-th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in list" @click="open(item)">
                    <td>{{ item.column1 }}</td>
                    <td>{{ item.column2 }}</td>
                    <td>{{ item.column3 }}</td>
                </tr>
            </tbody>
        </table>

        <adap-pagination :store="adapStore"></adap-pagination>

    </div>

</template>

<script>
import AdapTh from 'vue-adap-table/th.vue';
import AdapPagination from 'vue-adap-table/pagination.vue';
import AdapSearchfield from 'vue-adap-table/searchfield.vue';
import AdapStore from 'vue-adap-table/Store';

export default {
    name: "Example",
    components: { AdapTh, AdapPagination, AdapSearchfield },
    data: function() {
        return {
            list: [], //order by column1 by default, execute populateList when we need to refresh the list
            adapStore: new AdapStore("column1", (params) => this.populateList(params))
        }
    }, 
    mounted: function() {
    	//populate the list when the component is mounted
        this.adapStore.search();
    },
    methods: {
        populateList: function(params) {

    		//here we are using vue-resource to query the result
        	this.$http.get('/someUrl', params).then((resp) => {
				this.list = resp.body.list; //put the result in your own object
                this.adapStore.setCount(resp.body.count); //set the total size to make the pagination
			});
        },
        open: function(item) {
            this.$router.push(`/item/${item.idPrincipalPk}`);
        }
    }
}
</script>

<style scoped>
    tbody tr {
        cursor: pointer;
    }
</style>
```