get_utc = function(date) { return new Date(date) / 1000; };
get_oid = function (date) {return ObjectId((get_utc(date)).toString(16) + "0000000000000000");}
