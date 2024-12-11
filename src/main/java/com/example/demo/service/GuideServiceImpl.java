package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Guide;
import com.example.demo.repository.GuideRepository;



@Service
public class GuideServiceImpl implements GuideService {

@Autowired
private GuideRepository guideRepository;
	/*@Override
	public String guideRegistration(Guide guide) {
		
		guideRepository.save(guide);
		return "Guide Registered Successfully";
	}
	@Override
	public Guide checkGuideLogin(String email, String password) {
		return guideRepository.checkGuideLogin(email, password);
	}

}*/
	public String addGuide(Guide g) {
		guideRepository.save(g);
		return "Guide Added Successfully";
	}
	
	@Override
	public String updateGuide(Guide g) {
	 Optional<Guide> object =  guideRepository.findById(g.getId());
	 String msg = null;
	 
	 if(object.isPresent())
	 {
		 Guide guide = object.get();
		 guide.setAge(g.getAge());
		 guide.setDateofbirth(g.getDateofbirth());
		 guide.setPassword(g.getPassword());
		 guide.setLocation(g.getLocation());
		 guide.setContact(g.getContact());
		 guide.setExperience(g.getExperience());
		 guide.setEmail(g.getEmail());
		 guide.setGender(g.getGender());
		 guide.setName(g.getName());
		 
		 guideRepository.save(guide);
		 msg = "Guide Added Successfully";
	 }
	 
	 else {
	      msg="guide id not found";
	    }
	    return msg;
	    }

	@Override
	public String deleteGuide(int gid) 
	{
		    Optional<Guide> object=guideRepository.findById(gid);
		    String msg=null;
		    if(object.isPresent()) {
		      Guide g=object.get();
		      guideRepository.delete(g);
		      msg="Guide deleted successfully";
		    }
		    else {
		      msg="guide id not found";
		    }
		    return msg;
		    }

	@Override
	public Guide viewGuide(int gid) 
	{
		return guideRepository.findById(gid).get();
	}

	@Override
	public List<Guide> viewallGuides() {
		return (List<Guide>) guideRepository.findAll();
	
	}

}
	
