import SectionTittle from "../../../shared/SectionTittle/SectionTittle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../../hooks/useSecureAxios";

const image_hosting_key = "58eff323c039f7e4f98003b4e4e29726";
console.log(image_hosting_key);
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItems = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    // UPLOAD IMAGE  TO THE IMAGEBB AND THEN GET THE URL
    console.log(data);
    const image_file = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, image_file, {
      headers: { "content-type": "multipart/form-data" },
    });
    console.log(res.data);
    // UPLOAD IMAGE URL TO THE SERVER
    const item = {
      name: data.name,
      recipe: data.recipe,
      category: data.category,
      image: res.data.display_url,
    };
    if (res.data.success) {
      axiosSecure.post("/menu", item).then((res) => {
        console.log(res.data);
      });
    }
  };

  return (
    <div>
      <div>
        <SectionTittle
          subHeading={"add an item"}
          heading={"what is new "}
        ></SectionTittle>
        {/* form */}
        <div className="bg-base-200 rounded-md p-4 space-y-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full ">
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Recipe name*</span>
                </label>
                <input
                  type="text"
                  {...register("name")}
                  placeholder="Type here"
                  className="input input-bordered w-full "
                />
              </div>
            </div>
            <div className="flex justify-between gap-1 w-full ">
              {/* category */}
              <div className="form-control w-full  ">
                <label className="label">
                  <span className="label-text">Recipe name*</span>
                </label>
                <select
                  defaultValue={"value"}
                  {...register("category")}
                  className="select select-bordered w-full "
                >
                  <option disabled value={"default"}>
                    Select a category
                  </option>
                  <option value={"salad"}>Salad</option>
                  <option value={"pizza"}>pizza</option>
                  <option value={"soup"}>soup</option>
                  <option value={"drinks"}>drinks</option>
                </select>
              </div>

              {/* price */}
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Recipe name*</span>
                </label>
                <input
                  type="text"
                  {...register("price")}
                  placeholder="Type here"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            {/* textarea */}
            <div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Recipe Details*</span>
                </label>
                <textarea
                  placeholder="Recipe details"
                  {...register("recipe")}
                  className="textarea textarea-bordered textarea-lg w-full "
                ></textarea>
              </div>
            </div>
            {/* file chose */}
            <div className="w-full my-2">
              <div className="form-control w-full">
                <input
                  type="file"
                  {...register("image")}
                  className="file-input file-input-bordered w-full max-w-xs"
                />
              </div>
            </div>
            <div>
              <input
                className="btn btn-outline  my-2"
                type="submit"
                value={"Add Item "}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItems;
