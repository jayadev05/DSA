class HashTable {

    constructor(size=53){
        this.table=new Array(size);
        this.size=size;
    }

    _hash(key){
        const hash=0;
       for(let i=0;i<key.length;i++){
            let charCode= key.charCodeAt(i);
            hash= (hash + charCode * i) % this.size;
       }

       return hash;
    }

    set(key,value){
        let index=this._hash(key);

        if(!this.table[index]){
            this.table[index]=[]
        }
        else {
            this.table[index].push([key,value]);
        }

    }


    get(key){
        let index= _hash(key);

        const bucket = this.table[index];

        if(!bucket) return false;

        for(let i=0;i<bucket.length;i++){
            if(bucket[i][0]===key){
                return bucket[i][1];
            }
        }

        return undefined;
    }

    remove(key){
        let index=_hash(key);

        let bucket= this.table[index];

        if(!bucket) return false;

        for(let i=0; i<bucket.length;i++){
            if(bucket[i][0]===key){
                bucket.splice(i,1);
                return true
            }
        }

        return false;
    }

}




class Solution{

    //linear probing 

    set(key,value){

        let index=this._hash(key);

        while(this.table[index] && this.table[index][0]!==key){
            index = (index + 1) % this.size
        }

        this.table[index]=[key,value];


    }

    get(key){

        let index = _hash(key);

        while(this.table[index] ){
            if(this.table[index][0]===key){
                return this.table[index][1]
            }
            index = (index + 1) % this.size;
        }

        return undefined;
    }

    remove(key){
        let index=_hash(key);

        while(this.table[index]){
            if(this.table[index][0]===key){
                const removedValue=this.table[index][1];
                this.table[index]=undefined
                return removedValue
            }

            index= (index + 1) % this.size
        }
        return false
    }

    // quadratic probing 

    set(key,value){
        let index= _hash(key);
        let i=0;

        while(this.table[index] && this.table[index][0]!==key){
            index = (index + i**2) % this.size;
            i++
        }

        this.table[index]= [key,value];
    }

    get(key){
        let index= _hash(key);
        let i=0;

        while(this.table[index]){

            if(this.table[index][0]===key){
                return this.table[index][1];    
            }

            index = (index + i **2) % this.size;
            i++;
        }

        return undefined;
    }

    remove(key){
        let index = _hash(key);
        let i=0;

        while(this.table[index]){
            if(this,table[index][0]===key){
                let removedValue=this.table[index][1];
                this.table[index]=undefined;
                return removedValue;
            }
            index=(index + i**2) % this.size;
            i++
        }

        return false
    }

    //double hashing 

    _hash1(key){
        let hash=0;

        for(let i=0;i<key.length;i++){
            let charCode= key.charCodeAt(i);
            hash= (hash + charCode *i) % this.size;
        }
        return hash
    }

    _hash2(key){
        let hash=0;

        for(let i=0;i<key.length;i++){
            let charCode = key.charCodeAt(i);
            hash = (hash + charCode) % this.size-1
        }

        return hash+1; // shouldnt be 0
    }

    set(key,value){
        let index= this._hash1(key);
        let step= this._hash2(key)
        let i=0;

        while(this.table[index]){
            index = (index + i*step) % this.size
            i++;
        }

        this.table[index]= [key,value]
    }

    get(key){
        let index= this._hash1(key)
        let step= this._hash2(key)
        let i=0;

        while(this.table[index]){
            if(this.table[index][0]===key){
                return this.table[index][1]
            }
            index = (index + i*step) % this.size;
            i++
        }

        return undefined;
    }

    remove(key){
        let index= this._hash1(key)
        let step= this._hash2(key)
        let i=0;

        while(this.table[index]){
            if(this.table[index][0]===key){
                let removedValue=this.table[index][1];
                this.table[index]=undefined;
                return removedValue;
            }

            index = (index + i*step) %this.size;
            i++;
        }

        return false
    }

}