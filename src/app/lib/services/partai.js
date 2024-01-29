import instance from "@/app/lib/services/instance";

export default async function partai(query) {
    try {
        const res = await instance.get(
            `/smartchoice/filter`,
            {params: {search: query}}
        );
        return res.data.data;
    }catch (err) {
        throw err;
    }
}